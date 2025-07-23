import { Calendar } from "lucide-react";

interface TrackCardProps {
  title: string;
  duration: string;
  price: number;
  image: string;
  tags: string[];
  gradient: string;
}

const OverviewTrackCard: React.FC<TrackCardProps> = ({
  title,
  duration,
  price,
  image,
  tags,
  gradient,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div
        className={`h-32 ${gradient} relative flex items-center justify-center`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg text-sm font-semibold text-gray-800">
          ${price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          {duration}
        </div>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTrackCard;
