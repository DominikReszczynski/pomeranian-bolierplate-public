import './styles.css';

export const FAQ = () => {
  return (
    <div className='FaqConteiner'>
      <h1>FAQ</h1>
      <p>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</p>
      <details>
        <summary>
          <span>Od kiedy interesuje się it?</span>
        </summary>
        <p>
          Od małego brzdąca intersowałem się technologią oraz it, pamiętam to
          jak wczoraj, chciałem pomagać mamie i tworzyłem dla niej 'roboty'
          które miały pomagać w obowiązkach 😉. Jednak na poważnie zacząłem się
          iteresować it już w gimnazjum, gdzie zacząłem programować oraz
          interesować się hardwear'ową częścią informatyki. W tedy zacząłem
          składać swoje pierwsze komputery.
        </p>
      </details>
      <details>
        <summary>
          <span>Jak potoczyło się moje życie w it?</span>
        </summary>
        <p>
          W gimnazjum już wiedziałem, że jest to kierunek, w którym chcę podążać.
          Dlatego zaraz po jego ukończeniu udałem się do liceum na kierunek
          informatyczny. Nauczyłem się tam wiele przydatnych rzeczy jak:
          <ul>
            <li>programowanie w języku python</li>
            <li>dobierać podzespoły zgodnie do zastosowania komputera</li>
            <li>działanie sieć oraz zarządzanie nimi</li>
            <li>i wiele więcej!</li>
          </ul>
          Te wszystkie umiejętności pozwoliły mi napisać dobrze maturę z
          informatyki i pójść na studia na Politechnikę Wrocławską gdzie
          studiowałem 2 lata. Niestety jednak, Telekomunikacja nie okazała się
          tym co chciałem w życiu robić dlatego postawiłem na zmianę kierunku
          mojej kariery. Poszedłem więc na studia Informatyczne oraz
          postanowiłem się kształcić dodatkowo na własną rękę co doprowadziło
          mnie do miejsca w którym właśnie jestem! Wydaje mi się że podjęte
          przeze mnie kroki były dobre i jestem zadowolony ze swoich decyzji 🙂!
        </p>
      </details>
      <details>
        <summary>
          <span>Co dalej?</span>
        </summary>
        <p>
          W życiu zawodowym chciałbym w niedługim czasie rozpocząć moją karierę
          jako Junior Front-End Developer. Pozwoliło by mi to się dalej
          kształcić oraz zdobywać nowe, cenne doświadczenie przy pracy nad
          komercyjnymi projektami. A co ze studiami? Plan jest prosty!!! Dalej
          uczyć się pilnie i już w listopadzie wybrać swoją specjalizację! Do
          wyboru mam:
          <ul>
            <li>E-commerce-Developer</li>
            <li>Inżynier aplikacji i systemów chmurowych</li>
            <li>Inżynier aplikacji i systemów mobilnych</li>
            <li>Inżynier systemów i sieci komputerowych</li>
            <li>Programista gier komputerowych</li>
            <li>Projektowanie systemów informatycznych i analiza danych</li>
          </ul>
          jednak realnie zastanwiam się nad dwoma: E-commerce-Developer lub
          Inżynier aplikacji i systemów chmurowych. Obie te specjalizacje
          pozwolą mi na dalszą naukę jako programista Front-End, więc wybór nie jest dla mnie
          prosty 😉.
        </p>
      </details>
      <details>
        <summary>
          <span>Czym interesuje się prywanie?</span>
        </summary>
        <p>
          Moją prawdziwą pasją jest programowanie, sprawia mi ono przyjemność i
          nie traktuję tego jak pracę. Poza tym w wolnym czasie lubię gotować i
          wymyślać nowe dania, majsterkować i grać w gry video.
        </p>
      </details>
    </div>
  );
};
