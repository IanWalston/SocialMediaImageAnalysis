$("#saveButton").on("click", function () {
    $("#display-saved").empty()

    $("#display-saved").append($("<h1>").text("Saved"))

    for (i = 0; i < colorsArray.length; i++) {
        let color = colorsArray[i].color

        //reformat each color to css format -- rgb(12,50,39) 
        let rgbColor = `rgb(${color.red},${color.green},${color.blue})`


        //storing each color from the array into local storage
        localStorage.setItem(`savedColor${i}`, rgbColor)

        let currentUrl = localStorage.getItem('newUrl')
        localStorage.setItem('savedUrl', currentUrl)
    }
})

