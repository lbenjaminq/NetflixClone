import { setDetail } from "./ApiSlice";
import instance from "../axios";

export const getDetail = (id) => (dispatch) => {
  const uid = new Intl.NumberFormat('de-DE').format(id)
  console.log("ACTION",uid)
  instance.get(`movie/${uid}?api_key=28aa3c7130bb9e9c02d5fcc14f7bd997&language=en-US`)
  .then(data => dispatch(setDetail(data.data)))
  .catch(err => console.log(err))
}
