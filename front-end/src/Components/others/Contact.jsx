import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Contact.module.css';
import { BsFillPersonFill, BsFillTelephoneFill, BsFillPhoneFill } from 'react-icons/bs';
import {MdEmail, MdLocationOn} from 'react-icons/md';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {

        const handleSubmit = (event) => {
            event.preventDefault();
        }

        return (
            <Fragment>
                <Container className={styles.ContactFormContainer}>
                    <Row>
                        <Col  lg ={7} xl={7} md={7} xs={12}>
                            <div className={styles.FormSide}>
                        
                            <form onSubmit={handleSubmit}>

                              <div className={styles.InputStyling}>
                                  <BsFillPersonFill/><input className={styles.inputs} type="text" name="name" placeholder='Your Name' />
                              </div>
                              <div className={styles.InputStyling}>
                                  <BsFillTelephoneFill/><input className={styles.inputs} type="text" name="name" placeholder='Your Phone' />
                              </div>

                              <div className={styles.InputStyling}>
                                  <MdEmail/><input className={styles.inputs} type="text" name="name" placeholder='Your Email' />
                              </div>

                              <div className={styles.TextareaStyling}>
                                  <textarea className={styles.textarea} type="text" name="name" placeholder='message' rows={5} />
                              </div>

                              <div className={styles.ButtonStying}>
                                   <input className={styles.buttons} type="submit" name="name"/>
                              </div>

                            </form>
                        
                            </div>
                        </Col>

                        <Col  lg ={5} xl={5} md={5} xs={12}>

                            <div className={styles.ContentSide}>
                               <div className={styles.IconStyling}>
                                    <MdEmail/>
                               </div>
                               <div className={styles.ContentStyling}>
                                   <p>info.themeshaper@gmail.com</p>
                               </div>
                            </div>

                            <div className={styles.ContentSide}>
                                 <div className={styles.IconStyling}>
                                     <MdLocationOn />
                                 </div>
                                 <div className={styles.ContentStyling}>
                                     <p>Corporate Office Address:<br /> Road#3, Nikunjo-2, Dhaka</p>
                                 </div>
                            </div>
                            
                            <div className={styles.ContentSide}>
                                <div className={styles.IconStyling}>
                                    <BsFillPhoneFill />
                                </div>
                                <div className={styles.ContentStyling}>
                                    <p>+8801953103206 <br/>+8801337813648</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default Contact;