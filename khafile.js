// Auto-generated
let project = new Project('updog');

project.addSources('Sources');
project.addLibrary("F:/Program Files/Armory/armsdk//armory");
project.addLibrary("F:/Program Files/Armory/armsdk//iron");
project.addParameter("--macro include('armory.trait')");
project.addParameter("--macro include('armory.trait.internal')");
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/blur_edge_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/compositor_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/compositor_pass.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_indirect.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_indirect.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_light.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_light_quad.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass_lamp_volume.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass_viewray.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_blend_weight.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_blend_weight.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_edge_detect.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_edge_detect.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_neighborhood_blend.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_neighborhood_blend.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/ssao_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/world_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/world_pass.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_002_mesh.frag.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_002_mesh.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_002_shadowmap.frag.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_002_shadowmap.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_003_mesh.frag.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_003_mesh.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_003_shadowmap.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_004_mesh.frag.glsl');
project.addAssets("build_updog/compiled/Shaders/Material_002_data.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Shaders/Material_003_data.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Shaders/Material_004_data.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Shaders/shader_datas.arm", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/brdf.png", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/noise8.png", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/smaa_area.png", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/smaa_search.png", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/Scene.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/mesh_Icosphere.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/mesh_Plane.001.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/mesh_Plane.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Assets/envmaps/World_irradiance.arm", { notinlist: true });
project.addDefine('arm_deferred');
project.addDefine('arm_csm');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_depthprepass');
project.addDefine('rp_shadowmap');
project.addDefine('rp_shadowmap_size=1024');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_antialiasing=SMAA');
project.addDefine('rp_supersampling=1');
project.addDefine('rp_gi=Off');
project.addDefine('rp_ssgi=SSAO');
project.addDefine('arm_shaderload');
project.addDefine('arm_soundcompress');
project.addDefine('arm_fast');


resolve(project);