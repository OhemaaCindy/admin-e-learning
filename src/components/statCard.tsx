interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
}) => {
  const changeColor =
    changeType === "positive" ? "text-green-500" : "text-red-500";
  const changeIcon = changeType === "positive" ? "↗" : "↘";

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="text-blue-600">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
          <div className={`text-sm flex items-center ${changeColor}`}>
            <span className="mr-1">{changeIcon}</span>
            {change}
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
