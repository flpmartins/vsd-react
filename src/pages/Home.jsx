 import React from 'react'
 import { Layout } from '../layout'
 function Home() {
  return (
    <Layout title={""}>
          <div style={styles.containerWrapper}>
            <div style={styles.container}>
              <h1 style={styles.title}>Olá, eu sou Filipe Martins</h1>
              <h2 style={styles.subTitle}>Desenvolvedor Front-end | Desenvolvedor Back-end</h2>
              <p style={styles.text}>
                Bem-vindo ao meu portifoĺio criativo! 
                Aqui você encontrará meus projetos
                mais recentes e minha jornada profissional.
              </p>
              <button style={styles.button}>
                Explorar Portfólio
              </button>
              <div style={styles.socialContainer}>
                <a href="" style={styles.socialLink}>
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"  style={styles.socialIcon}/>
                </a>
                <a href="" style={styles.socialLink}>
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" style={styles.socialIcon}/>
                </a>
              </div>
            </div>
            </div>
    </Layout>
  )
}

const styles = {
  containerWrapper: {
    padding: '4px',
    borderRadius: '30px',
    background:'linear-gradient(270deg,#7f00ff, #e100ff, #7f00ff)',
    backgroundSize: '600% 600%',
    animation:'gradientAnimation 10s ease infinite',
    display: 'inline-block'
  },
  container: {
    display: 'flex',
    flex:1,
    maxWidth: '600px',
    flexDirection:'column',
    padding:'50px',
    gap:'25px',
    alignItems: "flex-start",
    borderRadius: '25px',
    backgroundColor: '#000000cc'
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 700,
    margin:0,
    background: 'linear-gradient(135deg, #fff, #e100ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor:'transparent',
    textAlign: 'left'
  },
  subTitle: {
    color: 'rgba(255, 255,  255, 0.8)',
    fontSize:'1.3rem',
    fontWeight:400,
    margin:0,
    textAlign:'left'
  },
  text: {
    color: 'rgba(255, 255,  255, 0.8)',
    fontSize:'1.1rem',
    margin:0,
    textAlign:'left'
  },
  button: {
    padding: '14px 24px',
    background: 'linear-gradient(135deg,  #7f00ff, #e100ff)',
    color:'#fff',
    fontWeight: 600,
    fontSize: "1.1rem",
    border: 'none',
    borderRadius:'10px',
     marginTop: '10px',
     transition: 'all 0.2s ease-in-out',
     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
  },
  socialContainer: {
    display: 'flex',
    gap: '20px',
    marginTop:'20px'
  },
  socialLink: {
    transition: 'transform 0.2s'
  },
  socialIcon: {
    width: '32px',
    height: '32',
    filter: 'brightness(0) invert(1)'
  }
}

export { Home }