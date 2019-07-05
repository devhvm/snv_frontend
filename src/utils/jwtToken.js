export default function () {
  return 'Bearer ' + localStorage.getItem('id_token')
}
