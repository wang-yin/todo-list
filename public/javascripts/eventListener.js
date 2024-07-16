document.addEventListener("DOMContentLoaded", () => {

  const completed = document.querySelectorAll('.complete')
  const edit = document.querySelectorAll('.edit')

  for(let i = 0; i < completed.length; i++) {
    completed[i].addEventListener('click', function(event) {
      event.preventDefault()
      const id = this.dataset.id
      complete(id)
    })
  }

  for(let i = 0; i < completed.length; i++) {
    edit[i].addEventListener('click', function(event) {
      event.preventDefault()
      const id = this.dataset.id
      window.location.href = '/api/update/' + id
    })
  }

})

