import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import '../styles/Resume.css'

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
      },
      author: {
        fontSize: 12,
        textAlign: 'center'
      },
      subtitle: {
        fontSize: 18,
        margin: 12
      },
      text: {
        margin: 12,
        fontSize: 12,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      },
      bullet: {
        margin: 6,
        fontSize: 12,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      }
  });
  
const Resume = () => {


    return (
        <Document>
        <Page style={styles.body}>
            <Text style={styles.header} fixed>
            ~ Created with react-pdf ~
            </Text>
            <Text style={styles.title}>Dewandra Downs</Text>
            <Text style={styles.author}>(352)470-3501</Text>
            <Text style={styles.author}>dee_downs@outlook.com</Text>
            <Text style={styles.author}>github.com/DeeDowns</Text>
            <Text style={styles.author}>linkedin.com/in/dewandra-downs</Text>
            <Text style={styles.subtitle}>Work Experience</Text>
            <Text style={styles.text}>
                Flight Attendant — March 2016 - August 2020 
                <Text style={styles.bullet}>
                Supervised and worked with diverse groups of Flight Attendants to ensure the safety and comfort of customers
                </Text>
                <Text style={styles.bullet}>
                Participated in and facilitated regular crew briefings to discuss safety and medical procedures, delegate responsibilities,  and any issues that may affect the flight
                </Text>
            </Text>
            <Text style={styles.text}>
                Recreational Gymnastics Coach/Camp Counselor — April 2015 - March 2016
                Implemented spotting, verbal instruction, and demonstration to teach gymnastics fundamentals to children of various ages and abilities
                Collaborated with a team of coaches to set up lesson plans, lead classes, and supervise children
            </Text>
            <Text style={styles.subtitle}>Education</Text>
            <Text style={styles.text}>
                Lambda School — Full Stack Web Development, June 2020 - Present
                University of Florida, Gainesville FL — Bachelor of Arts in Anthropology, May 2016
            </Text>
            <Text style={styles.subtitle}>Skills</Text>
            <Text style={styles.text}>
                HTML 
                CSS
                JavaScript
                React 
                Redux
            </Text>
      </Page>
    </Document>
    )
}

export default Resume