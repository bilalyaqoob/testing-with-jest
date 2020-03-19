const {generateText} = require('./util');

test('should output name and age',()=>{
    const text  = generateText('bilal',24);
    expect(text).toBe('bilal (24 years old)');
});