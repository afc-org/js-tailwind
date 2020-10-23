const fadeIn = (id, duration) => {
    id.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: duration ? duration : 500,
        easing: "linear"
    })
}

const fadeOut = (id, duration) => {
    id.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: duration ? duration : 500,
        easing: "linear"
    })
}

const slideInBottom = id => {
    id.animate([
        {
            opacity: 0,
            transform: "translateY(25%)"
        },
        
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ], 
    
    {
        duration: 300,
        easing: "ease-out"
    })
}

const slideOutBottom = id => {
    id.animate([
        {
            opacity: 1,
            transform: "translateY(0)"
        },
        
        {
            opacity: 0,
            transform: "translateY(25%)"
        }
    ], 
    
    {
        duration: 300,
        easing: "ease-out"
    })
}

const dropdownIn = id => {
    id.animate([
        {
            opacity: 0,
            transform: "translate(0, 50px)"
        },
        
        {
            opacity: 1,
            transform: "translate(0, 38px)"
        }
    ], 
    
    {
        duration: 300,
        easing: "ease-out"
    })
}

const dropdownOut = id => {
    id.animate([
        {
            opacity: 1,
            transform: "translate(0, 38px)"
        },
        
        {
            opacity: 0,
            transform: "translate(0, 50px)"
        }
    ], 
    
    {
        duration: 300,
        easing: "ease-out"
    })
}