class PatientsController < ApplicationController
  before_action :set_doctor
  before_action :set_patient, only: [:show, :destroy, :update, :edit]

  def index
    render component: 'Patients', props: {doctor: @doctor, patients: @doctor.patients}
  end

  def show
      render component: "Patient", props: {doctor: @doctor, patient: @patient}
  end
  def create
      patient = @doctor.patients.new(patient_params)
      if patient.save
          #doctor show page
          # needs an id
          redirect_to doctor_patients_path(@doctor.id)
      else
          #TODO Deal with this use case
      end
  end

  def new
      render component: 'PatientNew', props: {doctor: @doctor}
  end

  def edit
      render component: 'PatientEdit', props: {doctor: @doctor, patient: @patient}
  end

  def update
      if @patient.update(patient_params)
          redirect_to doctor_patients_path(@doctor.id)
  end

  def destroy
      @patient.destroy
      redirect_to doctor_patients_path(@doctor.id)
      # redirect_to look at this tommorrow
  end
end


  private
  def patient_params
    params.require(:patient).permit(:body, :name)
  end

  def set_doctor
   @doctor = Doctor.find(params[:doctor_id])
  end

  def set_patient
      # this way is a little better because it makes sure
      # it only searched that specific doctors patient
      @patient = @doctor.patients.find(params[:id])
      # @patient = Patients.find(params[:id])
  end
end
