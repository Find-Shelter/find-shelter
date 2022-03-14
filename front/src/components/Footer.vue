<template>
    <footer>
        <p>
            {{ $t("footer.main_1") }}
            <a
                href="https://github.com/fabrahaingo/find-shelter"
                target="_blank"
                >Open Source</a
            >. {{ $t("footer.main_2") }}
            <a href="mailto:suggestion@find-shelter.com">
                {{ $t("footer.link") }}
            </a>
        </p>
        <p class="discord">
            <a href="https://discord.gg/bCEzJFc9Bc">
                <img
                    src="../../../img/logo_discord.png"
                    alt="logo discord"
                    target="_blank"
                />
            </a>
        </p>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    color: white;
    text-align: center;

    a {
        color: white;
        font-weight: 700;
    }

    img {
        height: 4rem;
        width: auto;
    }
}
.discord {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        transition: transform 400ms ease;
    }

    a:hover {
        transform: scale(1.05);
    }
}
</style>
