const ATTACK_VALUE = 10;

const chosenMaxLife = 100;
const currentMonsterHealth = chosenMaxLife;
const currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function handleAttack() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', handleAttack);
