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
            <div class="validation-text">{{validationText}}</div>
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
                        <li>Beim Bier-Turnier 2022 sollen alle Teilnehmer*innen die Möglichkeit haben, ihr Lieblingsbier zu finden.
                            Der Zeitraum dafür ist das komplette Jahr 2022.
                        </li><br>
                        <li>Die Website wird von einem Login Bereich aus datenschutzrechtlichen Gründen geschützt. </li><br>
                        <li>Jede/r Teilnehmer*in hat einen eigenen Turnierbaum und kann Turnierbäume aller Mitspieler*innen einsehen. </li><br>
                        <li>In jeder Runde wird die Hälfte aller Biermarken eliminiert. Dazu treten jeweils zwei Marken gegeneinander an.</li><br>
                        <li>Zugelasene Biersorten sind: Pils, Helles, Kölsch, Schwarzbier, Kellerbier, Bockbier, Export, Hefeweizen, Stout</li><br>
                        <li>Nicht zugelassene Biersorten sind: Craftbiere aller Art, Biermischgetränke wie Radler, Diesel etc., ALKOHOLFREIE Biere, Malzbiere, Belgische Biersorten, Cider</li><br>
                        <li>Die Verkostung sollte nach Möglichkeit "blind" erfolgen. Das heißt, der oder die Teilnehmer*in nutzt zur Verkostung zwei Gläser und lässt diese von einer zweiten Person austauschen.</li>
                    </ol>
                </p>
            </div>
</template>

<script>
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '@/firebase'

    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                isLoggedIn: false,
                validationText: '',
                currentUser: null,
            }
        },
        methods: {
            async sendEmailVerification() {
                console.log(process.env.VUE_APP_BASE_URL);
                let actionCodeSettings = {
                url: process.env.VUE_APP_BASE_URL,
                handleCodeInApp: true
                };
                try {
                    await sendEmailVerification(auth.currentUser, actionCodeSettings)
                } catch (error) {
                    console.log('error ', error.code)
                }
            },
            async loginUser() {
                try {
                    await signInWithEmailAndPassword(auth, this.email, this.password);
                    console.log(auth.currentUser.emailVerified)
                    if (auth.currentUser.emailVerified) {
                        this.isLoggedIn = true;
                        this.$router.replace({ name: 'Home', params: {
                            id: auth.currentUser.displayName
                        }});
                    } else {
                        console.log('sending email..');
                        this.sendEmailVerification();
                        this.validationText = 'Bestätige deine E-Mail-Adresse. Wir haben dir einen Verifizierungslink per Mail geschickt.'
                    }
                } catch (error) {
                    if (error.code === 'auth/user-not-found') {
                        window.alert('E-Mail-Adresse oder Passwort falsch. bitte versuche es erneut.');
                    } else {
                        window.alert(error)
                    }
                }
            },
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

.validation-text {
    color: red;
    font-size: 0.75rem;
    padding: 0 0 0.5rem 0;
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

    .bierturnier-form {
    padding-left: 0;
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