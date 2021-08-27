export default function TimeTitle({ table }) {
  const time = table[0].createdTime.split("T")[0];
  const splitDate = time.split("-");
  const formattedDate = `${splitDate[1]} / ${splitDate[2]} / ${splitDate[0]}`;
  return <h4>{formattedDate}</h4>;
}
