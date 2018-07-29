/**
 *
 */
class Occupation
{
    /**
     *
     * @param {string|HTMLElement} prefix
     */
    constructor (prefix)
    {
        /**
         * @private
         * @type {HTMLElement}
         */
        this.prefix = prefix;

        this.listOfPrefixes = [
            'Frontend',
            'UI/UX',
            'Fullstack'
        ]
    }

    /**
     *
     */
    init ()
    {
        if (!this.prefix)
        {
            return;
        }

        this.swapPrefix();
    }

    /**
     * @private
     */
    swapPrefix (array)
    {
        var i = 0;
        setInterval(() => {
            this.prefix.innerHTML = this.listOfPrefixes[i];
            i++;
            if(i === this.listOfPrefixes.length) i = 0;
        }, 2000
        );
    }
}

export default Occupation;