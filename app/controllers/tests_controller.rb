class TestsController < ApplicationController
  before_action :set_test, only: [:show, :edit, :update, :destroy]

  # GET /tests
  # GET /tests.json
  def index

  end

  # GET /tests/1
  # GET /tests/1.json
  def show
  end

  # GET /tests/new
  def new
    @test = Test.new
  end

  # GET /tests/1/edit
  def edit
  end

  # POST /tests
  # POST /tests.json
  def create

  end

  # PATCH/PUT /tests/1
  # PATCH/PUT /tests/1.json
  def update

  end

  # DELETE /tests/1
  # DELETE /tests/1.json
  def destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.

end
