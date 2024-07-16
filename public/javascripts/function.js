function complete(id) {
  axios({
    method: 'PUT',
    url: 'api/'+ id
  })
  .then(function (result) {
    location.reload()
  })
  .catch(function (err) {
    console.log(err)
  })
}