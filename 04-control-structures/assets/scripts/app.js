const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 18;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(attackType) {
  let maxDamage;
  if (attackType === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ) {
    alert('Won!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Lost!')
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('both dead')
  }
}

function handleAttack() {
  attackMonster('ATTACK')
  endRound()
}

function handleStrongAttack() {
  attackMonster('STRONG_ATTACK')
  endRound()
}

function handleHealPlayer() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue)
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', handleAttack);
strongAttackBtn.addEventListener('click', handleStrongAttack);
healBtn.addEventListener('click', handleHealPlayer);
