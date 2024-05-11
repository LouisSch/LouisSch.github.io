$(document).ready(() => {
    var dt = new Date();
    document.getElementById('getCurrentDate').innerHTML = dt.getFullYear()

    // Load 3 first projects
    let nbr_proj = $('#main > div').length
    if (nbr_proj <= 3) {
        $('#main > div').each((idx, el) => {
            el.classList.remove('hidden')
        })
    }else {
        $('#main > div').each((idx, el) => {
            el.classList.remove('hidden')
            if (idx == 2) return false
        })
    }
})

function deactivate() {
    $('#navig > li').each((idx, el) => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            return false
        }
    })
}

function hide_all() {
    $('#main > div').each((idx, el) => {
        if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
        }
    })
}

function display_page(page_nbr) {
    hide_all()
    idx_activate = [(page_nbr-1)*3, (page_nbr-1)*3 + 1, (page_nbr-1)*3 + 2]
    $('#main > div').each((idx, el) => {
        if (idx_activate.includes(idx)) el.classList.remove('hidden')
    })
}

$('#first-page').on('click', () => {
    display_page(1)
    deactivate()
    $('#first-page')[0].classList.add('active')
})

$('#second-page').on('click', () => {
    display_page(2)
    deactivate()
    $('#second-page')[0].classList.add('active')
})

// $('#third-page').on('click', () => {
//     display_page(3)
//     deactivate()
//     $('#third-page')[0].classList.add('active')
// })