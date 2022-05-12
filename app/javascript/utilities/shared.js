import { parseJSON, format} from "date-fns"

export const formatTimeStamptToDate = (date, dateFormat="dd/MM/yyy kk:mm") => {
  const parsedDate = parseJSON(date)
  const formatedDate = format(parsedDate, dateFormat)
  return formatedDate;
};