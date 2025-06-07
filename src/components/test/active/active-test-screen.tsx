export interface ActiveTestScreenProps {
  images: string[];
}

export function ActiveTestScreen({ images }: ActiveTestScreenProps) {
  console.log(images);
  return (
    <div className="w-full h-full">
      {
        images.length > 0 ? (
          <img className="w-full h-full object-contain" src={images[images.length - 1]} alt="current-emu-image" />
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )
      }
    </div>
  );
}
