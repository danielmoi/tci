
import styles from './App.module.css';

function References () {


  return (
      <header class={styles.header}>
        <h2 class="mb-10">References</h2>

        <div class="text-lg mb-20">The formulas being used have been extrapolated from the articles below:
        <ul>
          <li>BIS 60 = 4.0 - (age x 0.01) ie. 0.1 per decade of age</li>
          <li>BIS 46 = 4.0 - (age x 0.02) ie. 0.2 per decade of age</li>
        </ul>
        </div>




        <div class="text-lg">
        1. <a href="https://pubmed.ncbi.nlm.nih.gov/29661412/" class="underline hover:text-slate-300" target="_blank">Eleveld DJ, Colin P, Absalom AR, Struys M. Pharmacokinetic-pharmacodynamic model for propofol for broad application in anaesthesia and sedation. Br J Anaesth. 2018;120(5):942-59.</a>
        </div>
        <div class="text-sm mb-10 mt-5">
        Figure 1. Relationships between effect-site concentration and predicted BIS, and the relationship between age and effect-site concentration for 50% and 10% drug effect for the final PK-PD model. BIS, bispectral index. (1)
        </div>
        <img src="/images/correlation-bja-2018.png" alt="Correlation 1" srcset="" />


        <div class="text-lg mt-20">
        2. <a href="https://pubmed.ncbi.nlm.nih.gov/33317804/" class="underline hover:text-slate-300" target="_blank">Vellinga R, Hannivoort LN, Introna M, Touw DJ, Absalom AR, Eleveld DJ, et al. Prospective clinical validation of the Eleveld propofol pharmacokinetic-pharmacodynamic model in general anaesthesia. Br J Anaesth. 2021;126(2):386-94.</a>
        </div>
        <div class="text-sm mb-10 mt-5">
        Figure 2. The relationship between target concentration and age for the Eleveld PK-PD model showing the expected drug effect and suppression of BIS values from baseline. BIS, bispectral index;PK-PD, pharmacokinetic-pharmacodynamic. (2)
        </div>
        <img src="/images/correlation-bja-2021.png" alt="Correlation 1" srcset="" />
        <div class="mb-24"></div>
    </header>
  )
}

export default References
