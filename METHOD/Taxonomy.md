# Authentication Mechanisms


**Memory (something you know)**


    Passwords 
            Passwords must be a certain length, have more than x characters, have those signs, etc...
            A hash code of the password is saved in a database.
    PINs (6 number pins, 4 bumber, etc...)
    Security questions
        Name of your pets, what city were you born in, etc... Things only you would know, but that could also be socially hacked out of you-

**External (something you have)**

    SMS codes 
        (Look at phone... People own only 1 phone per person, most of the time, so this essentially assures that 1 person is behind an account, and the account cannot be shared, or at least it'll be hard to)

    Email links/codes 
        (Similarly. Notice how you would need to open a new window, new app, new tab... This makes you LEAVE the website/app you are on. How seamless is that, even?)
    
    Authenticator apps (Google Auth, Authy, Microsoft) 
        (Fairly protective, but your control over your account is external. Likewise, you need your phone or another device, and that device needs to authenticate into the authenticator app, etc... Should you lose your phone, you would lose access to a lot of things, and yet it's really good for security. A lot o companies use authenticator apps for their employees)

    Hardware keys (YubiKey, smart cards) 
        (Same thing. An external object to grant access to a digital spot. The smart card needs to be allocated by a system that owns the login. They give you a key, and you have access to the door. This as a result makes you feel like you have access to something that belongs to you truly, though the "lock" can be changed at any moment...)


**Biometric (something you are)**

    
    Fingerprint
    Face ID
    Voice recognition 
        
    (Fairly uncommon... Biometric data is often used for security afterwards, facial recognition, indentification, data training...)

    Behavioral biometrics (typing rhythm, mouse movement) (used in Captcha and human detection)

**CAPTCHA (prove that you are human)**
 
    Codes, strings of letters that are hard to read
    Logic puzzles, rotate objects to follow a sequence,
    Pairing objects
    Finding which image has x object, a car, a bike, etc... (Also, this is used afterwards to train drones I hear?)

**Federated / Delegated (another external)**

    “Login with Google / Facebook / Apple” (OAuth, SSO)


**Trust (external login method)**

    “Recognized device” memory

    Friend verification (older FB recovery, Steam’s “ask a friend”)


# User Experiences, or the “feel” of it



**The Doorway**

Entering a username + password → “ringing the doorbell.” Often accompanied by branding (“Welcome back, [name]!”) to create intimacy. Relatively seamless.

**The Suspicion**

CAPTCHAs (“prove you’re human”).
Recovery grilling (Pokémon TCG asking for decks you built 4 months ago).
“Unusual login attempt” warnings.


**The Endurance**

Long multi-step onboarding (Final Fantasy XIV, endless forms).
Time-outs/log-outs forcing repeated re-authentication (Outlook).

**The Seamless**

Biometrics and SSO (“you didn’t even notice you logged in”).
Auto-login / “keep me signed in.” 
Tricks people into forgetting the ritual exists — hiding the asymmetry. Some notice sudden log out, 

**The Punishment**

Lockouts after failed attempts. Long delays (“You must wait 24 hours to try again”). Account deletions / bans, warnings, etc.

3. Common Components Across Logins

Things you almost always encounter, regardless of mechanism:

Identification → username, email, phone number.

Authentication → password, code, biometric.

Security Layer → CAPTCHA, 2FA, suspicious login checks.

Terms & Conditions → “agree to enter.”

Recovery Path → “Forgot password?” (email reset, ID verification, you cannot use the same password, despite this password being the one you tried to login with and it gave you a failed attempt...).

Trust Building Signals → padlock icon, LOCKED, “secure,” “last login from X device.”, warning emails...

Friction vs. Frictionless Design → tradeoff between “easy” and “secure.”, internal and external, do platforms lose access to a database when logins are from google and such?