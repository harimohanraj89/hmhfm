class SongsController < ApplicationController
  def index
    render json: Song.all
  end

  def show
    render json: Song.find(params[:id])
  end

  def create
    song = Song.create(song_params)
    render json: song
  end

  def update
    song = Song.find(params[:id])
    song.update(song_params)
    render json: song
  end

  def destroy
    song = Song.find(params[:id])
    song.destroy
    render json: song
  end

  private
  def song_params
    params.require(:song).permit(:title, :audio_url, :artist, :album_art, :genre)
  end
end
