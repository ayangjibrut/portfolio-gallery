document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#page-header")

    const intercept = document.createElement("div")
    intercept.dataset.observerIntercept = ""
    header.before(intercept)

    const headerObserver = new IntersectionObserver(([entry]) => {
        header.classList.toggle("active", !entry.isIntersecting)
    })
    headerObserver.observe(intercept)

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    })

    document.querySelectorAll(".hidden").forEach(el => revealObserver.observe(el))
})

// document.addEventListener("DOMContentLoaded", function() {
//     const header = document.querySelector("#page-header")
//     const intercept = document.createElement("div")

//     intercept.setAttribute("data-observer-intercept", "")
//     header.before(intercept)

//     const observerHeader = new IntersectionObserver(function([entry]) {
//         header.classList.toggle("active", !entry.isIntersecting)
//     })

//     observerHeader.observe(intercept)

//     const observer = new IntersectionObserver(function(entries) {
//         entries.forEach(function(entry) {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show")
//             } else {
//                 entry.target.classList.remove("show")
//             }
//         })
//     })

//     const hiddenElements = document.querySelectorAll(".hidden")

//     hiddenElements.forEach(function(el) {
//         observer.observe(el)
//     })
// })

// const header = document.getElementById("page-header")
// const intercept = document.createElement("div")

// intercept.setAttribute("data-observer-intercept", "")
// header.before(intercept)

// const observerHeader = new IntersectionObserver(function([entry]) {
//     header.classList.toggle("active", !entry.isIntersecting)
// })
  
// observerHeader.observe(intercept)

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(function(entre) {
//         if (entre.isIntersecting) {
//             entre.target.classList.add("show")
//         } else {
//             entre.target.classList.remove("show")
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll(".hidden")

// hiddenElements.forEach((el) => observer.observe(el))