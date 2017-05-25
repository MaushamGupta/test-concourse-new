module.exports=function(grunt)
{

	grunt.initConfig({
		
		shell:{
             installPackagae:{
            	 command:'npm install'
             },
             runUnitTest:{
            	 command:'npm test'
             }
		}
	})
	grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell:installPackagae','shell:runUnitTest']);
}