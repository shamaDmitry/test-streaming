const MediaCard = () => {
  return (
    <div className="max-w-xs bg-[#1a1a1a] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src="https://picsum.photos/200/300?random=3"
          alt="Movie Thumbnail"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white">Stranger Things</h3>

        <p className="text-sm text-[#a5a5a5] line-clamp-2">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces, and one strange
          little girl.
        </p>

        <div className="mt-4 flex items-center text-sm text-[#a5a5a5]">
          <span>2016</span>
          <span className="mx-2">•</span>
          <span>Drama, Sci-Fi, Horror</span>
          <span className="mx-2">•</span>
          <span>TV-14</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
