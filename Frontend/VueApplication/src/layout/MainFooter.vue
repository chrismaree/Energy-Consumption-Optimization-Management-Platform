<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.wits.ac.za/eie/studies/courses/elen4000-electrical-engineering-design-ii/">
                            Wits University
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wits.ac.za/eie/studies/courses/elen4000-electrical-engineering-design-ii/">
                            ELEN4000 Electrical Engineering Design II
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, under an <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>  licence.
                <a href="https://github.com/SoIidarity/Energy-Consumption-Optimization-Management-Platform" target="_blank">Github</a> 
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
