export default function CreatedAt({ createdAt, className }: { createdAt: Date, className?: string }) {
  const date = new Date().getTime() - new Date (createdAt).getTime();
  const years = Math.floor(date / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor(date / (1000 * 60 * 60 * 24));
  const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((date % (1000 * 60)) / 1000);

  const timeAgo =
    years > 0
      ? `${years} years ago`
      : days > 0
      ? `${days} days ago`
      : hours > 0
      ? `${hours} hours ago`
      : minutes > 0
      ? `${minutes} minutes ago`
      : `${seconds} seconds ago`;
  return (
    <div className={"text-gray-400 text-sm font-light italic "+className}>
      Created:   {timeAgo}
    </div>
  );
}
