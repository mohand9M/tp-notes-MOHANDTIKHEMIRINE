// Liste des élèves avec leurs notes
const eleves = [
    { nom: 'Alice', notes: [12, 14, 16] },
    { nom: 'Bob', notes: [7, 8, 6] },
    { nom: 'Charlie', notes: [10, 10, 11] }
  ];
  
  // Fonction pour calculer la moyenne d'un élève
  function calculerMoyenne(notes) {
    const total = notes.reduce((acc, note) => acc + note, 0);
    return (total / notes.length).toFixed(2); // Renvoie la moyenne avec 2 décimales
  }
  
  // Fonction pour savoir si l'élève est admis (moyenne >= 10)
  function estAdmis(moyenne) {
    return moyenne >= 10;
  }
  
  // Fonction pour afficher les résultats
  function afficherResultats() {
    eleves.forEach(eleve => {
      const moyenne = parseFloat(calculerMoyenne(eleve.notes)); // On transforme en nombre
      const statut = estAdmis(moyenne) ? "Admis" : "Refusé";
      console.log(`${eleve.nom} - Moyenne : ${moyenne} - ${statut}`);
    });
  }
  
  // Appel de la fonction principale
  afficherResultats();
  