interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: "positive" | "negative";
  iconPath: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  iconPath,
}) => {
  const changeColor =
    changeType === "positive" ? "text-green-500" : "text-red-500";
  const changeIcon = changeType === "positive" ? "↗" : "↘";

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
          <div className={`text-sm flex items-center ${changeColor}`}>
            <span className="mr-1">{changeIcon}</span>
            {change}
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div className="text-blue-600">
          <img src={iconPath} alt="image" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
