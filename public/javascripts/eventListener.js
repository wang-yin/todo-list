document.addEventListener("DOMContentLoaded", () => {
  const completed = document.querySelectorAll('.complete')

  for(let i = 0; i < completed.length; i++){
    completed[i].addEventListener('click', function(event) {
      event.preventDefault()
      const id = this.dataset.id
      complete(id)
    })
  }



})

