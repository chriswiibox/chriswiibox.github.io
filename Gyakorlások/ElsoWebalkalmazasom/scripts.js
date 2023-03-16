let tombkepek = [
    {
        utvonal: 'images/pexels-andré-cook-131723.jpg',
        cim: 'Kép fenyőkkel',
        leiras: 'Phasellus id tortor quis elit varius venenatis quis vitae sapien. Proin sapien tortor, consectetur sed lectus id, placerat semper justo. \
        Cras tincidunt massa et egestas tincidunt. Cras lacinia metus sit amet maximus sollicitudin. Quisque pretium eu ipsum et hendrerit. Sed.',
    },
    {
        utvonal: 'images/pexels-brandon-montrone-1374295.jpg',
        cim: 'Kép fenyőkkel, úttal',
        leiras: 'In at mattis mauris. Nulla ultrices sapien non ipsum pellentesque vestibulum vel in ipsum. Pellentesque imperdiet, erat vel elementum ultricies,\
        nisi dolor molestie nisi, sit amet venenatis justo nunc at est. Integer justo augue, volutpat nec elit sed, euismod efficitur.',
    },
    {
        utvonal: 'images/pexels-felix-mittermeier-957024.jpg',
        cim: 'Lombkorona',
        leiras: 'Aenean semper id sem vitae fringilla. Nam ultrices egestas augue, vitae varius orci pellentesque non. Vestibulum euismod orci id neque dapibus gravida.\
        Mauris ut dui non est tincidunt rutrum ac vel orci. Duis finibus posuere erat, nec efficitur dolor. Curabitur.',
    },
    {
        utvonal: 'images/pexels-johannes-plenio-1125776.jpg',
        cim: 'Erdő és Nap',
        leiras: 'Quisque sollicitudin sodales leo, ac tincidunt ante imperdiet imperdiet. Suspendisse tincidunt eget sapien quis accumsan. Nulla facilisi. \
        Mauris a cursus nisi, quis tincidunt sem. Praesent luctus ante lacinia lacus blandit vulputate. Maecenas cursus nulla nec est finibus lacinia. Donec ac.',
    },
    {
        utvonal: 'images/pexels-johannes-plenio-1567058.jpg',
        cim: 'Erdő',
        leiras: 'Nunc velit nisi, blandit a dictum vitae, lobortis vitae lectus. Donec at mollis dui. Suspendisse potenti. Nunc pulvinar non metus volutpat rhoncus. \
        Mauris sit amet libero odio. Nunc lacus nisl, consectetur non blandit ut, gravida nec ex. Mauris fringilla dictum.',
    },
    {
        utvonal: 'images/pexels-pixabay-33109.jpg',
        cim: 'Őszi erdei út',
        leiras: 'Etiam id arcu turpis. Vestibulum convallis rhoncus leo et aliquam. Donec gravida ultrices risus quis commodo. Sed nec tincidunt diam. \
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce maximus sagittis posuere. Vivamus porttitor, arcu in venenatis suscipit, enim neque pellentesque lorem, vel gravida augue erat nec lorem.',
    },
    {
        utvonal: 'images/pexels-pixabay-247431.jpg',
        cim: 'Elefánt az erdőben',
        leiras: 'Sed volutpat cursus libero, nec finibus lectus. Donec nulla nibh, sollicitudin vitae metus id, semper consequat nunc. Praesent nec mauris urna. \
        Vestibulum eget elementum elit. Nullam molestie nec libero sed vulputate. Proin dictum nunc risus, a luctus magna venenatis ut. Aliquam ac porttitor libero. Vivamus euismod libero diam, ac pellentesque.',
    }    
]
// fgv a nagykep adatok betoltesre
let loadnagykep = (aktualiskepid) => {
    $('#nagykep').attr('src', tombkepek[aktualiskepid].utvonal)
    $('#nagykep-title').text(tombkepek[aktualiskepid].cim)
    $('#nagykep-description').text(tombkepek[aktualiskepid].leiras)    
  }
let aktualiskepid = 0

let kiskepkiemel = (kepid) => {
    document.getElementById('kiskep'+kepid).classList.add('kiskepaktualis')  
}

let kiskepkiemelmegszuntet = (kepid) => {
    document.getElementById('kiskep'+kepid).classList.remove('kiskepaktualis')  
}


// thumbnail letrehozasa, esemeny letrehozasa
tombkepek.forEach((item, index) => {
    $('#kiskepeksora').append('<div><img class="kiskep" id="kiskep'+index+'" data-sorszam="' + index + '"></div>')
    $('.kiskep').click((event) => {
        let sorszamClicked = $(event.target).attr('data-sorszam')
        loadnagykep(sorszamClicked)
        kiskepkiemelmegszuntet(aktualiskepid)
        aktualiskepid = sorszamClicked
        kiskepkiemel(aktualiskepid)
    })
    $('.kiskep').mouseenter((event) => {
        $('#kiskepcime').css('display', 'block');
        let sorszamClicked = $(event.target).attr('data-sorszam')
        $('#kiskepcime').text(tombkepek[sorszamClicked].cim);        
    })
    $('.kiskep').mouseleave((event) => {
        $('#kiskepcime').css('display', 'none');        
    })
})

// kezdokepek betoltese
loadnagykep(0)
for (let i=0; i<tombkepek.length; i++) {
    $('#kiskep'+i).attr('src', tombkepek[i].utvonal)    
}
kiskepkiemel(0)


// nyilak esemenye
$('#balradiv').click(() => {
        kiskepkiemelmegszuntet(aktualiskepid)
        if (aktualiskepid > 0) {
            aktualiskepid--
        }  else {    
            aktualiskepid = tombkepek.length-1
        }
        loadnagykep(aktualiskepid)
        kiskepkiemel(aktualiskepid)
    })
$('#jobbradiv').click(() => {
        kiskepkiemelmegszuntet(aktualiskepid)
        if (aktualiskepid < tombkepek.length-1) {
            aktualiskepid++
        }  else {    
            aktualiskepid = 0
        }
        loadnagykep(aktualiskepid)
        kiskepkiemel(aktualiskepid)
    })

// nagykep hover esemeny szoveg lathato legyen
$('#nagykepdiv').mouseenter(() => {
   $('#nagykep-szovege').css('display', 'inline-block');
})
$('#nagykepdiv').mouseleave(() => {
    $('#nagykep-szovege').css('display', 'none');
 })
