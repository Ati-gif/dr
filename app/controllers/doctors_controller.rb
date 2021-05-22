class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :update, :edit, :destroy]

  def index
      @doctors = Doctor.all
      render component: "Doctors", props: {doctors: @doctors}
  end

  def show
      # @doctor = Doctor.find(params[:id]) done in before-action
      render component: "Doctor", props: {doctor: @doctor}
  end

  def edit
      # @doctor = Doctor.find(params[:id]) done in before-action
      render component: "DoctorEdit", props: {doctor: @doctor}
  end
  def update
   # @doctor = Doctor.find(params[:id]) done in before-action
   if @doctor.update(doctor_params)
    redirect_to root_path
   else
       # didn't update to db, deal with this later
   end
  end

  def new
      render component: "DoctorNew"
  end

  def create
      @doctor = Doctor.new(doctor_params)
      if(@doctor.save)
          redirect_to root_path
      else
          # didn't save to db, deal with this later
      end 
  end

  def destroy
      # @doctor = Doctor.find(params[:id]) done in before-action
    @doctor.destroy
    redirect_to root_path
  end

  def tacos
      render component: "Doctors"
  end

  private

  def set_doctor
    @doctor = Doctor.find(params[:id])
  end

  def doctor_params
      params.require(:doctor).permit(:first_name)
  end
end
