"use client";
import {useState, useEffect} from "react";
import styles from "./page.module.css";
import Image from "next/image";
export default function TicketGenerated() {
  const [ticketData, setTicketData] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("ticketData");
    if(storedData) {
      setTicketData(JSON.parse(storedData));
    }
  }, [])

  if(!ticketData) {
    return <p>Loading ticket data...</p>;
  }
  return (
    <main className="main">
      <h1 className="title">
        Congrats, <span className={styles.name}>{ticketData?.fullName}</span> Your ticket
        is ready.
      </h1>
      <p className={`description ${styles.description}`}>
        We've emailed your ticket to{" "}
        <span className={styles.email}>{ticketData?.email}</span> and
        will send updates in the run up to the event.
      </p>

      <section className={styles.ticketContainer}>
        <div className={styles.ticketCardContainer}>
          <section className={styles.ticketCardHeader}>
            <Image
              src={"/images/logo-mark.svg"}
              alt="logo-mark"
              width={30}
              height={40}
              className={styles.ticketLogo}
            />
            <div className={styles.ticketCard}>
              <h2 className={styles.ticketTitle}>Coding Conf</h2>
              <p className={styles.ticketDescription}>
                Jan 31, 2025 / Austin, TX
              </p>
            </div>
          </section>

          <section className={styles.ticketCardUser}>
            <Image
              src={ticketData?.image || "/images/image-avatar.jpg"}
              alt="ticket-card"
              width={50}
              height={50}
              className={styles.ticketCardImage}
            />
            <div className={styles.ticketCardDetails}>
              <h3 className={styles.ticketCardName}>{ticketData?.fullName}</h3>
              <section className={styles.ticketCardInfo}>
                <Image
                  src="/images/icon-github.svg"
                  alt="github icon"
                  width={16}
                  height={16}
                />
                <p className={styles.ticketCardInfoLabel}>{`@${ticketData?.gitHubUser}`}</p>
              </section>
            </div>
          </section>
        </div>
        <div className={styles.ticketGeneratedNum}>
          <p className={styles.ticketGeneratedNumLabel}>{ticketData?.ticketID}</p>
        </div>
      </section>
    </main>
  );
}
