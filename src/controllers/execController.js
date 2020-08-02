const vm = require('vm');
const util = require('util')

module.exports = {
    async create(request, response){

        const { code } = request.body


        let result = '';
        
        const cons = {
          log: (...args) => result += (util.format(...args) + '\n'),
        };
        const context = vm.createContext({console: cons});
               
        try {
          vm.runInContext(code, context);
          response.json({ result, error: false })
        } catch (err) {
          response.json({ result: err.message, error: true });
        }
        
    }
}
