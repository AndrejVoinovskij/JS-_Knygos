let knyguKatalogas = {
    fantastineLiteratura : [
        {
            ISBN: 'GR1324K',
            metai: 2021,
            pavadinimas: 'Robotu karai',
            puslapiai:365
        },
        {
            ISBN: 'GR1524K',
            metai: 2011,
            pavadinimas: 'Zvaigzdziu karai',
            puslapiai:305  
        },
        {
            ISBN: 'GR1334K',
            metai: 2023,
            pavadinimas: 'Labirintas',
            puslapiai:343
        },
        {
            ISBN: 'GR5624K',
            metai: 2021,
            pavadinimas: 'Terminatorius',
            puslapiai:325
            },
        
    ],

    grozineLiteratura :[
        {
            ISBN: 'GR4324K',
            metai: 2017,
            pavadinimas: 'Akys',
            puslapiai:400
        },
        {
            ISBN: 'GR1564K',
            metai: 2020,
            pavadinimas: 'Paskutinis pavasarys',
            puslapiai:315
        },
        {
            ISBN: 'GR1345K',
            metai: 2017,
            pavadinimas: 'Anyta',
            puslapiai:385
        },
        {
            ISBN: 'GR1775K',
            metai: 2018,
            pavadinimas: 'Pergales miestas',
            puslapiai:555
        },
    ],

    detektivineLiteratura :[
        {
            ISBN: 'GR8965K',
            metai: 2011,
            pavadinimas: 'Paskutine instancija',
            puslapiai:395,
        },
        {
            ISBN: 'GR2884K',
            metai: 2023,
            pavadinimas: 'Hirurge',
            puslapiai:455
        },
        {
            ISBN: 'GR1980K',
            metai: 2022,
            pavadinimas: 'Delione',
            puslapiai:456
        },
        {
            ISBN: 'GR2657K',
            metai: 2016,
            pavadinimas: 'Kitas Kalnas',
            puslapiai:435
        },
    ]
}    

for(let kategorija in knyguKatalogas){
    console.log(`${kategorija}(${knyguKatalogas.fantastineLiteratura.length} knygu)`)
    console.log("--------------------------------------------")
    for(knyga of knyguKatalogas[kategorija]){
        console.log(`ISBN:${knyga.ISBN}`)
        if(knyga.metai==2023){
            console.log(`Leidimo metai:${knyga.metai}(Nauja knyga)"`)
        }else{
            console.log(`Leidimo metai:${knyga.metai}`)
        }
        console.log(`Pavadinimas:${knyga.pavadinimas}`)
        console.log(`Puslapiu skaicius:${knyga.puslapiai}`)
        console.log("--------------------------------------------")
    }    
}
