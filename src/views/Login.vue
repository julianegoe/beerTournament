<template>
    <div class="login-container">
        <img class="bierturnier-logo" src="../assets/bierturnier.jpeg" />
        <div class="bierturnier-form">
            <form  @submit.prevent="loginUser">
            <div class="email">
                <input v-model="email" type="email" placeholder="Email" />
            </div>
            <div class="password">
                <input v-model="password" type="password" placeholder="Password" />
            </div>
            <button class="login-btn" type="submit">Log In</button>
        </form>
        <div class="register-link">
            <RouterLink :to="{name: 'Register'}">Hier registrieren</RouterLink>
        </div>
        </div>
    </div>
    <div class="rules-box">
                <h1>Was ist das Bier-Turnier 2022?</h1>
                <p>
                    <ol>
                        <li>In der Beer Challenge 2022 soll jeder Teilnehmer die Möglichkeit haben, das, seiner Meinung nach, am besten schmeckenste Bier zu finden.
                            Der Zeitraum dafür ist das komplette Jahr 2022.
                        </li>
                        <li>Die Website wird von einem Login Bereich aus datenschutzrechtlichen Gründen geschützt. </li>
                        <li>Jeder Teilnehmer kann alle Turnierbäume einsehen. </li>
                        <li>Bei einer Stimmenabgabe treten immer zwei Biermarken gegeneinander an. </li>
                        <li>Zugelasene Biersorten sind: Pils, Helles, Kölsch, Schwarzbier, Kellerbier, Bockbier, Export, Hefeweizen, Stout</li>
                        <li>Nicht zugelassene Biersorten sind: Craftbiere aller Art, Biermischgetränke wie Radler, Diesel etc., ALKOHOLFREIE Biere, Malzbiere, Belgische Biersorten, Cider</li>
                        <li>Die Verkostung sollte nach Möglichkeit "blind" erfolgen. Das heißt, der Teilnehmer nutzt zur Verköstigung zwei Gläser und lässt diese von einer zweiten Person austauschen.</li>
                    </ol>
                </p>
                <div>Startschuss ist der 01.01.2022</div>
            </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                isLoggedIn: false,
            }
        },
        methods: {
            async loginUser() {
                try {
                    await signInWithEmailAndPassword(auth, this.email, this.password);
                    this.isLoggedIn = true;
                    this.$router.replace({ name: 'Overview'});
                } catch (error) {
                    if (error.code === 'auth/user-not-found') {
                        window.alert('E-Mail-Adresse oder Passwort falsch. bitte versuche es erneut.');
                    } else {
                        window.alert('Es ist ein Fehler aufgetreten: ', error.code)
                    }
                }
            }
        }
    }
</script>

<style scoped>

.login-container {
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.bierturnier-logo {
    aspect-ratio: 1;
    width: 40%;
    object-fit: contain;
    padding-right: 2rem;
}

.bierturnier-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
}

input {
    width: 200px;
    padding: 1rem;
    border: none;
}

.email, .password {
    padding: 0.5rem;
}

.login-btn{
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    background: #fbba00;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition: 0.2s ease-in-out;
}

.login-btn:hover {
    transform: scale(1.05);
}

.register-link {
    padding-top: 1rem;
}

.rules-box {
    padding: 1rem;
    margin: 1rem 7rem 4rem 7rem;
    background: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

ol > li {
    text-align: left;
}

@media screen and (max-width: 980px) {
    .bierturnier-logo {
    width: 70%;
    padding: 0;
    }

    .login-container {
    flex-direction: column;
    align-items: center;
    }

    .rules-box {
    margin: 1rem 1rem 2rem 1rem;
}
}
</style>