import './styles/footer.css';

const email = 'dominikreszczynski09@gmail.com';
const phone = '+48 516 802 283';

export function AppFooter() {
  return (
    <footer>
      <div>
        Cieszę się że odwiedziłeś stronę mojego projektu 😃
      </div>
      <a
        style={{ marginRight: '5px' }}
        href={`mailto:${email}`}
      >{`${email}`}</a>
      <div>
        Znajdziesz tutaj rzeczy których nauczyłem się na kursie Pomeranian Start It lub sam we własnym zakresie 😊
      </div>
      <a href={`tel:${phone}`}>{`${phone}`}</a>
    </footer>
  );
}
