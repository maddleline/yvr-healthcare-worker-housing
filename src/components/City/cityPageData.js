import React from "react";

export default {
  English: {
    healthcareWorkers: {
      heading: "Find temporary housing",
      subHeading: "Healthcare workers",
      paragraphs: [
        <p key="hw-english-1">
          To request access to our listings, submit the form at the link below.
          Once your request has been approved, a link to our available listings
          will be sent to your email.
        </p>,
        <p key="hw-english-2" style={{ fontStyle: "italic" }}>
          Please note the team running this service has not done any due
          diligence on any of the offers. We are simply an information service
          and it is up to each party to meet and screen anyone they would like
          to enter into an agreement with.
        </p>,
      ],
      linkText: "Request access to listings",
    },
    propertyOwners: {
      heading: "House a healthcare worker",
      subHeading: "Property owners",
      paragraphs: [
        <p key="po-english-1">
          We are looking for property owners that have available furnished
          suites they can offer at low or no cost.
        </p>,
        <p key="pw-english-2">
          We ask that you set the cost below market rent, and pro-rate it
          weekly. This is to alleviate the financial burden on healthcare
          workers that are having to bear the cost of alternative housing in
          addition to their standing mortage or rent payments.
        </p>,
      ],
      listHeading: "Ideal properties will have the following amenities:",
      listItems: [
        "Separate entrance",
        "In-suite laundry",
        "Private washroom",
        "Kitchen or kitchenette",
        "Wifi",
      ],
      linkText: "List your property",
      linkHoverText: "Thanks!",
    },
    footer: { text: "Created by volunteers with" },
  },
  French: {
    healthcareWorkers: {
      heading: "Trouver un logement temporaire",
      subHeading: "Travailleu.r.e.s de la santé",
      paragraphs: [
        <p key="hw-french-1">
          Pour accéder à nos petites annonces, remplissez le formulaire avec le
          lien ci-dessous. Une fois votre demande approuvée, un courriel vous
          sera envoyé avec nos logements disponibles.
        </p>,
        <p key="hw-french-2" style={{ fontStyle: "italic" }}>
          Veuillez s’il vous plaît noter que l’équipe qui gère ce service n’a
          effectué aucune vérification diligente sur aucune des offres. Nous
          sommes un service d’information et il appartient à chaque parti de
          filtrer et de rencontrer les personnes ayant souhaité conclure un
          accord.
        </p>,
      ],
      linkText: "Demande accès à la liste des logements",
    },
    propertyOwners: {
      heading: "Loger un.e travailleur.e.s de la santé",
      subHeading: "Propriétaires",
      paragraphs: [
        <p key="po-french-1">
          Nous recherchons les propriétaires qui ont des logements disponibles
          offerts à bas prix ou sans frais.
        </p>,
        <p key="po-french-2">
          Nous suggérons que le loyer soit calculé au prorata pour chaque
          semaine et qu'il se situe dans la fourchette de la moitié du taux du
          marché ou moins. Il s'agit d'alléger le fardeau financier des
          travailleur.e.s de la santé qui doivent supporter le coût d'un
          logement alternatif en plus de leur hypothèque ou de leur loyer.
        </p>,
      ],
      listHeading: "Le logement idéal aurait les éléments suivants:",
      listItems: [
        "Entrée privée",
        "Buanderie dans le logement",
        "Salle de bain privée",
        "Cuisine ou cuisinette",
        "Internet sans fil",
      ],
      linkText: "Liste des logements",
      linkHoverText: "Merci!",
    },
    footer: { text: "Créer par des bénévoles avec" },
  },
};
