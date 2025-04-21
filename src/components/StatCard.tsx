interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center">
      <div className="flex justify-center mb-4 text-orange-500">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-navy mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;