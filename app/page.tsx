'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const scenes = [
    {
      duration: 3000,
      title: "सर्दी आ चुकी है…",
      subtitle: "सर्दियाँ फिर दस्तक दे चुकी हैं…",
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      duration: 4000,
      title: "गरम पानी की ज़रूरत",
      subtitle: "और अब सुबह-सुबह गरम पानी… हर घर की ज़रूरत बन चुका है।",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "💧"
    },
    {
      duration: 5000,
      title: "भरोसेमंद क्वालिटी",
      subtitle: "आपके परिवार की सुरक्षा और आराम के लिए… चुनिए भरोसेमंद क्वालिटी का immersion rod।",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "⚡"
    },
    {
      duration: 5000,
      title: "प्रीमियम फीचर्स",
      subtitle: "Laxmi Narayan Bartan Bhandar लाया है बेहतरीन quality का immersion rod… जो पानी को मिनटों में गरम कर दे।",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["✓ Shock-proof", "✓ Fast Heating", "✓ Heavy Duty Coil"]
    },
    {
      duration: 5000,
      title: "सिर्फ ₹250 से!",
      subtitle: "और सबसे बड़ी बात… कीमत सिर्फ ₹250 से शुरू!",
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      highlight: true
    },
    {
      duration: 4000,
      title: "Laxmi Narayan Bartan Bhandar",
      subtitle: "इस सर्दी… घर लाएँ गरमाहट और भरोसा",
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      contact: "📱 8586949325",
      final: true
    }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1)
      } else {
        setIsPlaying(false)
        setCurrentScene(0)
      }
    }, scenes[currentScene].duration)

    return () => clearTimeout(timer)
  }, [currentScene, isPlaying, scenes])

  const startPresentation = () => {
    setCurrentScene(0)
    setIsPlaying(true)
  }

  const skipToScene = (index: number) => {
    setCurrentScene(index)
    setIsPlaying(false)
  }

  return (
    <div className={styles.container}>
      {!isPlaying && currentScene === 0 && (
        <div className={styles.startScreen}>
          <div className={styles.startContent}>
            <h1 className={styles.brandTitle}>Laxmi Narayan Bartan Bhandar</h1>
            <h2 className={styles.productTitle}>Immersion Rod Campaign</h2>
            <p className={styles.tagline}>सर्दियों का सबसे भरोसेमंद साथी</p>
            <button className={styles.startButton} onClick={startPresentation}>
              प्रेजेंटेशन शुरू करें ▶
            </button>
          </div>
        </div>
      )}

      <div
        className={`${styles.scene} ${isPlaying ? styles.active : ''}`}
        style={{ background: scenes[currentScene].bg }}
      >
        <div className={styles.sceneContent}>
          {scenes[currentScene].icon && (
            <div className={styles.icon}>{scenes[currentScene].icon}</div>
          )}

          <h1 className={styles.sceneTitle}>
            {scenes[currentScene].title}
          </h1>

          <p className={styles.sceneSubtitle}>
            {scenes[currentScene].subtitle}
          </p>

          {scenes[currentScene].features && (
            <div className={styles.features}>
              {scenes[currentScene].features?.map((feature, idx) => (
                <div key={idx} className={styles.feature}>
                  {feature}
                </div>
              ))}
            </div>
          )}

          {scenes[currentScene].highlight && (
            <div className={styles.priceBox}>
              <div className={styles.priceLabel}>शुरुआती कीमत</div>
              <div className={styles.price}>₹250</div>
              <div className={styles.priceTag}>से शुरू</div>
            </div>
          )}

          {scenes[currentScene].contact && (
            <div className={styles.contactBox}>
              <div className={styles.contactNumber}>
                {scenes[currentScene].contact}
              </div>
              <button className={styles.callButton}>
                अभी संपर्क करें
              </button>
            </div>
          )}
        </div>

        {isPlaying && (
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                animation: `${styles.progressAnim} ${scenes[currentScene].duration}ms linear`
              }}
            />
          </div>
        )}
      </div>

      <div className={styles.controls}>
        <div className={styles.timeline}>
          {scenes.map((scene, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${currentScene === idx ? styles.active : ''}`}
              onClick={() => skipToScene(idx)}
              title={scene.title}
            />
          ))}
        </div>

        {isPlaying ? (
          <button
            className={styles.controlButton}
            onClick={() => setIsPlaying(false)}
          >
            ⏸ Pause
          </button>
        ) : currentScene > 0 ? (
          <button
            className={styles.controlButton}
            onClick={() => setIsPlaying(true)}
          >
            ▶ Resume
          </button>
        ) : null}
      </div>
    </div>
  )
}
