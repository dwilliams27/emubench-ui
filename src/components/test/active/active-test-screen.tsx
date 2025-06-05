export interface ActiveTestScreenProps {
  currentImage: string;
}

export function ActiveTestScreen({ currentImage }: ActiveTestScreenProps) {
  return (
    <div>
      {
        currentImage ? (
          <img src={currentImage} alt="current-emu-image" />
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )
      }
    </div>
  );
}
