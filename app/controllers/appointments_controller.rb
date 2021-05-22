class AppointmentsController < ApplicationController
  before_action :set_patient
  before_action :set_appointment, only: [:edit, :show, :update, :destroy]

  def index
    @appointments = @patient.appointments
    render component: "Appointments", props: {patient: @patient, appointments: @appointments}
  end

  def show
      render component: "Appointment", props: {patient: @patient, appointment: @appointment}
  end

  def new 
      render component: "AppointmentNew", props: {patient: @patient}
  end

  def create
      appointment = @patient.appointments.new(appointment_params)
      if (appointment.save)
          redirect_to patient_appointments_path(@patient.id)	
      else
          # later
      end
  end


  def edit
      render component: "AppointmentEdit", props: {patient: @patient, appointment: @appointment}
  end

  def update
      if (@appointment.update(appointment_params))
          redirect_to patient_appointments_path(@patient.id)	
      else
          # later
      end
  end

  def destroy
    @appointment.destroy
    redirect_to patient_appointments_path(@patient.id)	
  end

  private
  def appointment_params
    params.require(:appointment).permit(:body)
  end
  def set_patient
   @patient =Patient.find(params[:patient_id])
  end

  def set_appointment
   @appointment = @patient.appointments.find(params[:id])
  end
end
