import CountUp from "react-countup";

function Sidebar() {
  const cardColors = ["bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200"];

  return (
    <div className="flex flex-row md:flex-row justify-center items-center text-white z-20 mt-10 gap-2 md:gap-3 md:mt-0 sidebar-container">
      {[
        { count: 384, label: "Successful Projects" },
        { count: 100, label: "Success Rate", suffix: "%" },
        { count: 230, label: "Trusted Company" },
        { count: 4000, label: "Hours Worked" },
      ].map((item, index) => (
        <div
          key={item.label}
          className={`flex flex-col items-center justify-center rounded-lg shadow-md p-2 md:p-4 text-center w-24 md:w-40 h-24 md:h-40 ${cardColors[index]}`}
        >
          <h2 className="text-black font-bold text-lg md:text-2xl mb-1">
            <CountUp start={0} end={item.count} duration={2} suffix={item.suffix || " +"} />
          </h2>
          <p className="text-black font-medium md:font-semibold text-xs md:text-base">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
