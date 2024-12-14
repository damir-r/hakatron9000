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
  const [activeNavItem, setActiveNavItem] = useState<string>('');

  const navItems: NavItemProps[] = [
    {
      text: 'расписания',
      onClick: () => setActiveNavItem(activeNavItem === 'schedule' ? '' : 'schedule'),
      isActive: activeNavItem === 'schedule',
      ariaLabel: 'View schedule'
    },
    {
      text: 'схема школы',
      onClick: () => setActiveNavItem(activeNavItem === 'map' ? '' : 'map'),
      isActive: activeNavItem === 'map',
      ariaLabel: 'View school map'
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
        logoUrl="/icons/logo.svg"
        schoolName="РАСПИСАНИЕ АРКТИЧЕСКОЙ ШКОЛЫ"
        navItems={navItems}
        showSelection={activeNavItem === "schedule"}
      />

      <main className="mainContent">
        <div className={`content${activeNavItem !== "" ? " hidden" : ""}`}><MapSection
          mapUrl="/img/school.png"
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
          </section></div>
        <div className={`content${activeNavItem !== "schedule" ? " hidden" : ""}`}><img
          src="/icons/schedule.svg"
          alt="School Campus Overview"
          className="campusImage"
        /></div>
        <div className={`content${activeNavItem !== "map" ? " hidden" : ""}`}><img
          src="/img/plan.svg"
          alt="School Plan Overview"
          className="planImage"
        /></div>
      </main>
      <div className="facilitiesSection">
        <div className="facilitiesGrid">
          {facilityCards.map((card, index) => (
            <FacilityCard key={index} {...card} />
          ))}
        </div>
      </div>
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