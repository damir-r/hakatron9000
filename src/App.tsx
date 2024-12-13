import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header.tsx';
import { MapSection } from './components/MapSection.tsx';
import { ImageGalleryItem } from './components/ImageGalleryItem.tsx';
import { FacilityCard } from './components/FacilityCard.tsx';
import { Address } from './components/Address.tsx';
import { SocialLink } from './components/SocialLink.tsx';
import { NavItemProps } from './types.tsx';

export const App: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('campus');

  const navItems: NavItemProps[] = [
    { 
      text: 'расписания',
      onClick: () => setActiveNavItem('schedule'),
      isActive: activeNavItem === 'schedule',
      ariaLabel: 'View schedule'
    },
    {
      text: 'схема школы',
      onClick: () => setActiveNavItem('map'),
      isActive: activeNavItem === 'map',
      ariaLabel: 'View school map'
    },
    {
      text: 'кампус',
      onClick: () => setActiveNavItem('campus'),
      isActive: activeNavItem === 'campus',
      ariaLabel: 'View campus'
    }
  ];

  const facilityCards = [
    {
      title: 'Языковой центр',
      description: 'Углубленное изучение английского языка, второй иностранный язык по выбору, изучение якутского языка и языков коренных малочисленных народов Севера'
    },
    {
      title: 'Школьный техноцентр',
      description: 'Современные лаборатории для развития обучающихся по различным научно-исследовательским и инженерно-техническим направлениям, оснащенные высокотехнологичным оборудованием'
    },
    {
      title: 'Физкультурно-оздоровительный центр',
      description: 'Физкультурный зал, хореографический зал, бассейн, тренажеры, пять спортивных площадок, медицинский блок с кабинетами педиатра и стоматолога'
    },
    {
      title: 'Интернат',
      description: 'Расположен в здании ЦОиО "Сосновый бор", размещение в секциях, 2-3-х местные комнаты, пятиразовое питание'
    }
  ];

  return (
    <div className="container">
      <Header
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d6f559e76ae6accc477ab358d1af75565fd367926cbe69950b6bb3251fabe551?placeholderIfAbsent=true&apiKey=eda510c4d04b467a8e2abece48fb9a97"
        schoolName="РАСПИСАНИЕ АРКТИЧЕСКОЙ ШКОЛЫ"
        navItems={navItems}
      />

      <main className="mainContent">
        <MapSection
          mapUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/78f5c688c6aa53b6c2823897e03702c83684aff7348447e5fbdb58ef21ffefbd?placeholderIfAbsent=true&apiKey=eda510c4d04b467a8e2abece48fb9a97"
          gisLink="https://2gis.ru/yakutsk"
        />

        <section className="gallerySection">
          <h2 className="sectionTitle">Фотогалерея</h2>
          <div className="gallery">
            {[
              'rgba(217, 217, 217, 1)',
              'rgba(157, 157, 157, 1)',
              'rgba(89, 89, 89, 1)'
            ].map((color, index) => (
              <ImageGalleryItem
                key={index}
                backgroundColor={color}
                alt={`Gallery image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="facilitiesSection">
          <div className="facilitiesGrid">
            {facilityCards.map((card, index) => (
              <FacilityCard key={index} {...card} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <h2 className="footerTitle">Наш адрес</h2>
        <Address
          street="Сергеляхское шоссе 12 км, дом 2/10"
          city="г.Якутск"
          region="Республика Саха (Якутия)"
          postalCode="677008"
        />
        <div className="socialLinks">
          <SocialLink
          icon="/icons/phone.svg"
          text="+7(4112)319522"
          alt="Phone icon"
          href="tel:+74112319522"
          ariaLabel="Send SMS"
          />
          <SocialLink
            icon="/icons/email.svg"
            text="as@gov14.ru"
            alt="Email icon"
            href="mailto:as@gov14.ru"
            ariaLabel="Send email"
          />
          <SocialLink
            icon="/icons/vk.svg"
            text="ВКонтакте"
            alt="VK icon"
            href="https://vk.com/arcticschool"
            ariaLabel="Visit our VKontakte page"
          />
        </div>
      </footer>
    </div>
  );
};

export default App;