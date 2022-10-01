import React from 'react';
import Layout from '../components/Layout/Layout';
import { Button, Container, Row, Image } from 'react-bootstrap';
import Head from 'next/head'
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import { FaQuestion, FaArrowDown, FaCircle } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Card2 from '../components/Card2';

export default function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  const [state, setState] = useState(false);






  return (
    <Layout>
      {

        loading ?

          <div className='d-flex justify-content-center align-items-center div-preloader'>

            <motion.div

              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2
              }}
            >
              <Image
                alt='cargando'
                src='/assets/logo.png'
                width={500}
                height={500}
                layout='responsive'
              ></Image>
            </motion.div>
          </div>
          :


          <motion.main
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: false }}
          >
            <section id='inicio' className='mb-5  d-flex justify-content-center align-items-center'>
              <Container>
                <Row className=''>
                  <div className='col-12 col-lg-6 d-flex align-items-center '>
                    <div className='col-12' >
                      <div className='col-12' >
                        <div className='col-12'>
                          <motion.h1
                            initial={{ opacity: 0, x: -300, }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "Inertia", stiffness: 100, duration: 1 }}
                            viewport={{ once: false }}
                            className='text-center text-white titulos'>
                            Zondar
                          </motion.h1>
                        </div>
                        <div className='col-12'>
                          <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='text-center parrafo text-white'>Nada está tan lejos cuando se tiene la motivación y disciplina necesarias para lograrlo</motion.p></div>
                      </div>
                      <div className='d-flex justify-content-center ' >
                        <button className='Buton-Flecha'><FaArrowDown></FaArrowDown></button>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ y: 30 }}
                    animate={{ y: -30 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 2
                    }}
                    className='col-12 mt-5 col-lg-6 d-flex justify-content-center align-items-center '>
                    <Image
                      alt='Planeta'
                      src='/assets/planeta.png'
                      width={375}
                      height={375}
                      layout='responsive'
                    ></Image>
                  </motion.div>
                </Row>
              </Container>
            </section>
            <section className='mb-5 mt-5'>
              <Container>
                <Row>
                  <div className='col-12 d-flex justify-content-start'>
                    <motion.button
                      onClick={() => setState(!state)}
                      className='boton'
                      whileHover={{ rotate: 360, scale: 1.3, }}
                      whileTap={{ rotate: 0, }}
                      transition={{ duration: 1 }} //☺
                      variant="light"><FaBell size={44} ></FaBell></motion.button>
                  </div>
                </Row>
                <Row>
                  <div className='col-3'>

                  </div>
                  <Card2
                    state={state}
                    cambiarEstado={setState}
                    title='Zondar'
                    content='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem  Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem'
                  ></Card2>
                  <motion.div
                    initial={{ y: 30 }}
                    animate={{ y: -30 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 2
                    }}
                    className='col-lg-6 d-flex col-12'>

                    <Image
                      alt='sonda'
                      src='/assets/globo1.png'
                      width={375}
                      height={375}
                      layout='responsive'
                    ></Image>
                  </motion.div>
                  <div className='col-lg-3 col-12 d-flex align-items-end'>
                    <motion.button
                      onClick={() => setState(!state)}
                      className='boton1'
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      whileTap={{ rotate: 0, }}
                      transition={{ duration: 1 }}>
                      <FaQuestion size={44}></FaQuestion>
                    </motion.button>
                  </div>
                </Row>
              </Container>
            </section  >
          </motion.main>

      }
    </Layout>
  );
}
