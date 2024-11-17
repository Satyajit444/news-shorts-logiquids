export const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  // Options for formatting
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Format the date
  const formattedDate = date.toLocaleString("en-US", options);

  // Extract hour and minute in 12-hour format
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${time} on ${formattedDate}`;
};
