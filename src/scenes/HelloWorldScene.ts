import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.setBaseURL('assets/')

        // TODO: Drop in a link to the Itch tileset I'm using
        this.load.spritesheet('player-idle', 'player/Idle (32x32).png', {frameWidth: 32, frameHeight: 32, endFrame: 10});
    }

    create()
    {
        this.anims.create({
            key: "player-idle",
            frames: 'player-idle',
            frameRate: 12,
            repeat: -1
        })

        const player = this.add.sprite(400, 300, 'player-idle')
        player.play('player-idle')
    }
}